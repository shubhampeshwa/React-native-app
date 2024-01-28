import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { font } from "../../constants/StyleConst";
import { Images } from "../../constants";

const Navbar =({title,isBackButton,onClickBack})=>{
    return(
        <View style={styles.headerStyle}>
            {!!isBackButton&&<TouchableOpacity 
            onPress={()=>onClickBack()}
            style={{height:30,width:30,position:'absolute',left:10,alignItems:'center',justifyContent:'center'}}>
                <Image style={{height:30,width:30,tintColor:'white',}} source={Images.backButton}></Image>
            </TouchableOpacity>}
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle:{height:60,
        width:'100%',
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center'
    },
    titleStyle:{
    ...font.fontBold_24,

    }
    
})

export default Navbar