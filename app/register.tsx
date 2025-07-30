import { TextInput, ScrollView, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Girl from '@/assets/images/girl'
import Google from '@/assets/images/google'
import Facebook from '@/assets/images/facebook'
import { useNavigation } from '@react-navigation/native'

export default function Main(){
    let navigation = useNavigation()
    return (
        <ScrollView>
            <View style={{alignItems: 'center', marginTop: 56 }}>
                <Girl style ={{marginBottom: 64}}/>
                <View style={{gap: 24, width: 354}}>
                    <TextInput style={style.input} placeholder="Nama Lengkap"/>
                    <TextInput style={style.input} placeholder="Email"/>
                    <TextInput style={style.input} placeholder="Nomor HP"/>
                    <TextInput style={style.input} placeholder="Password"/>
                    <TextInput style={style.input} placeholder="Konfirmasi Password" textContentType="password"/>
                </View>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('success')}>Mendaftar</TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 7, marginBottom: 40}}>
                    <View style={style.line}></View>
                    <Text style={{color: '#C0C0C0', fontFamily: 'SpaceMono', fontWeight: 400, fontSize: 15}}>Atau daftar menggunakan</Text>
                    <View style={style.line}></View>
                </View>
                <TouchableOpacity style={style.googleButton}>
                    <View style={{flexDirection: 'row', gap: 100, justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Google/>
                        <Text style={style.googleText}>Google</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={style.facebookButton}>
                    <View style={{flexDirection: 'row', gap: 100, justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Facebook/>
                        <Text style={style.facebookText}>Facebook</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{fontFamily: 'SpaceMono', fontSize: 15, fontWeight: 400, textAlign: 'center', marginBottom: 30}}>Sudah punya akun? silahkan <Text style={{color: '#3498DB'}}>masuk</Text></Text>
            </View>
            
        </ScrollView>
    )
}

const style = StyleSheet.create({
    button : {width: 354, paddingTop: 17, paddingBottom: 17, textAlign: 'center' , backgroundColor: '#3498DB', borderRadius: 10, marginTop: 41, marginBottom: 40, fontFamily: 'SpaceMono', fontSize: 15, fontWeight: 700, color: '#fff'},
    input: {color: '#C0C0C0', borderColor: '#C0C0C0', borderWidth: 3, borderRadius: 10, paddingLeft: 20, paddingTop: 17, paddingBottom: 17, fontWeight: 400, fontFamily: 'SpaceMono', fontSize: 15},
    line : {width: 86, height: 2, backgroundColor: '#C0C0C0'},
    googleButton : {width: 354, borderRadius: 10, borderColor: '#E74C3C', borderWidth: 3, paddingLeft: 16, paddingTop: 9, paddingBottom: 10, marginBottom: 24 },
    facebookButton : {width: 354, borderRadius: 10, borderColor: '#3498DB', borderWidth: 3, paddingLeft: 16, paddingTop: 9, paddingBottom: 10, marginBottom: 49},
    googleText: {fontFamily: 'SpaceMono', fontSize: 15, fontWeight: 700, color: '#E74C3C'},
    facebookText: {fontFamily: 'SpaceMono', fontSize: 15, fontWeight: 700, color: '#3498DB'}
})
