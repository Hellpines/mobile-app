import Bike from '@/assets/images/bike'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
function Main(){
    let navigation = useNavigation()
    return (
        <View>
            <View style={{alignItems: 'center'}}>
                <Bike style={{borderRadius: 20, marginTop: 56, marginBottom: 37}}></Bike>
                <View style={{maxWidth: 279}}>
                    <Text style ={style.title}>Mudah dalam bertransaksi, dengan  Jumot</Text>
                    <Text style ={style.paragraph}>Beli kendaraan sesuai minatmu dan dengan harga negosiasi terbaik</Text>
                </View>
                <TouchableOpacity style ={style.button1}>Masuk</TouchableOpacity>
                <TouchableOpacity style ={style.button2} onPress={()=> navigation.navigate('register')}>Mendaftar</TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <Text style={{maxWidth: 352}}>Kembali</Text>
            </View>
        </View>
    )
}
export default Main


const style = StyleSheet.create({
    title : {fontFamily: 'SpaceMono', fontSize: 21, fontWeight: 700, textAlign: 'center'},
    paragraph : {fontFamily: 'SpaceMono', fontSize: 15, fontWeight: 400, textAlign: 'center', marginTop: 19, marginBottom: 72},
    button1 : {width: 354, paddingTop: 17, paddingBottom: 17, textAlign: 'center' , backgroundColor: '#3498DB', borderRadius: 10, marginBottom: 21, fontFamily: 'SpaceMono', fontSize: 15, fontWeight: 700, color: '#fff'},
    button2 : {width: 354, paddingTop: 17, paddingBottom: 17, textAlign: 'center', borderRadius: 10, marginBottom: 41, borderColor: '#3498DB', borderWidth: 2, fontFamily: 'SpaceMono', fontSize: 15, fontWeight: 700, color: '#3498DB'}
})