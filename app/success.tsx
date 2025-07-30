import { TextInput, ScrollView, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Success from '@/assets/images/success'

export default function Main(){
    return (
        <View style={{alignItems: 'center'}}>
            <Success style={{ marginTop: 56, marginBottom: 37}}/>
            <Text style={style.title}>Selamat! Anda sudah berhasil mendaftar</Text>
            <Text style={style.paragraph}>Silahkan periksa email anda untuk melakukan verifikasi sebelum melakukan Login.</Text>
            <TouchableOpacity style={style.button1}>Lanjutkan</TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    title : {fontFamily: 'SpaceMono', fontSize: 21, fontWeight: 700, textAlign: 'center', maxWidth: 352},
    paragraph : {fontFamily: 'SpaceMono', fontSize: 15, fontWeight: 400, textAlign: 'center', marginTop: 19, marginBottom: 203, maxWidth: 352},
    button1 : {width: 354, paddingTop: 17, paddingBottom: 17, textAlign: 'center' , backgroundColor: '#3498DB', borderRadius: 10, marginBottom: 21, fontFamily: 'SpaceMono', fontSize: 15, fontWeight: 700, color: '#fff'},
    button2 : {width: 354, paddingTop: 17, paddingBottom: 17, textAlign: 'center', borderRadius: 10, marginBottom: 41, borderColor: '#3498DB', borderWidth: 2, fontFamily: 'SpaceMono', fontSize: 15, fontWeight: 700, color: '#3498DB'}
})