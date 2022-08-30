import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Header from "../../../components/header/Header";
import ImageCard from "../../../components/ImageCard/ImageCard";
import { launchImageLibrary } from 'react-native-image-picker';
import CustomButton from '../../../components/customButton/CustomButton'
import appColors from "../../../styles/colors";

const DriverInfo = () => {

	const [driverDetail, setDriverDetail] = useState({
		cnicFront: 'davcdav',
		cnicBack: '',
		licenseFront: '',
		licenseBack: '',
		vehicleDetail: '',
		utilityBill: ''
	})

	const disabledButtonBit = !!driverDetail.cnicFront && !!driverDetail.cnicBack && !!driverDetail.licenseFront && !!driverDetail.licenseBack && !!driverDetail.vehicleDetail && !!driverDetail.utilityBill

	const onChangePhoto = (imageImage) => {
		const options = {
			noData: true,
			mediaType: 'photo',
		};
		launchImageLibrary(options, res => {
			if (res.uri) {
				let { fileSize, fileName, type, uri } = res;
				let newUri = uri;
				if (!fileName && isIOS) {
					let path = newUri;
					path = '~' + path.substring(path.indexOf('/Documents'));
					fileName = path.split('/').pop();
				}
				let obj = {
					size: fileSize,
					name: fileName,
					type,
					uri: newUri,
				};
				let avatar = new FormData();
				avatar.append('avatar', obj);
				setDriverDetail(prev => ({ ...prev, [imageImage]: res.uri }))
			}
		});
	};



	return (
		<View style={styles.container}>
			<Header title={'Driver Info'} />

			<ScrollView>
				<View style={styles.wrapper}>
					<View style={styles.note}>
						<Text  style={styles.noteText}>Please Upload Clear Picture Of Your Documents</Text>
					</View>
					<View style>
						<ImageCard title="Add CNIC Front" onChangePhoto={onChangePhoto} image={driverDetail.cnicFront} type={'cnicFront'} />
					</View>
					<View>
						<ImageCard title="Add CNIC Back" onChangePhoto={onChangePhoto} image={driverDetail.cnicBack} type={'cnicBack'} />
					</View>
					<View>
						<ImageCard title="ADD License Front" onChangePhoto={onChangePhoto} image={driverDetail.licenseFront} type={'licenseFront'} />
					</View>
					<View>
						<ImageCard title="ADD License Back" onChangePhoto={onChangePhoto} image={driverDetail.licenseBack} type={'licenseBack'} v />
					</View>
					<View>
						<ImageCard title="ADD Vehicle Detail" onChangePhoto={onChangePhoto} image={driverDetail.vehicleDetail} type={'vehicleDetail'} />
					</View>
					<View>
						<ImageCard title="ADD Utility Bill" onChangePhoto={onChangePhoto} image={driverDetail.utilityBill} type={'utilityBill'} />
					</View>
					<View style={styles.button}>
						<CustomButton title={'Submit'} disabled={!disabledButtonBit} />
					</View>
				</View>
			</ScrollView>
		</View>
	)
}
export default DriverInfo;


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrapper: {
		paddingTop: 20
	},
	button: {
		height: 100,
		justifyContent: 'center',
	},
	note:{
		alignItems:'center',
		padding:10
	},
	noteText:{
		fontSize:15,
		color: appColors.red,
		fontWeight:'bold'
	}

})