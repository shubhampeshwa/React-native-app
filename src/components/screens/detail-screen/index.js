
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "../../custom/Navbar";
import { font } from "../../../constants/StyleConst";

const DetailScreen =(props)=>{
   const desccription= props.route.params.itemDesc

    const backToHome =()=>{
        props.navigation.goBack()
        // console.log("helllo")
    }

    return(
        <View style={{flex:1}}>
        <Navbar title={'Detail Of Product'} isBackButton={true} onClickBack={backToHome}/>
        <View style={styles.mainView}>
            <Text style={styles.renderItemText}>{desccription}</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{flex:1,justifyContent:'center',alignItems:'center'},
    renderItemText:{...font.fontNrml_16},
})

export default DetailScreen;