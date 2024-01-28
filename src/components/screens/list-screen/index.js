import React, { useEffect, useState } from "react"
import {FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Screens } from "../../../constants/NavigationConst"
import Navbar from "../../custom/Navbar"
import { font } from "../../../constants/StyleConst"
import API from '../../../services'
import { useDispatch, useSelector } from "react-redux"
import { apiLoading } from "../../../store/actions/Loader"
import Loader from "../../custom/LoadingScreen"
import { saveProductDetails } from "../../../store/actions/ProductList"


const ListScreen =({navigation})=>{
    const dispatch = useDispatch();
    const variable = useSelector(state => state.Loader.loader)
    const userData = useSelector(state => state.Loader.productDetails)

const apiCall = async ()=> {
    dispatch(apiLoading(true))
    const res = await API.request('https://jsonplaceholder.typicode.com/photos');
    console.log("response==>",res);
    dispatch(saveProductDetails(res))
    dispatch(apiLoading(false))
}
useEffect(()=>{
 apiCall()
},[])

const renderList =(item,index)=>{
    return(
        <TouchableOpacity 
        onPress={()=>navigation.navigate(Screens.DetailScreen,{itemDesc:item.title})}
        key={index} style={styles.renderItemView}>
            <Text style={styles.renderItemText}>{item.title}</Text>
        </TouchableOpacity>
    )
}

const seprator =()=>{
    return(
        <View style={{padding:10}}>
            <View style={styles.sepratorStyle}/>
        </View>
        
    )
}

const handleRefresh =()=>{
  console.log("handle refresh==>")
}
    return(
        <View style={{flex:1}}>
        <Navbar title={'Item List'} isBackButton={false}/>
        <View style={{flex:1}}>
            {!!userData&&<FlatList data={userData}
            showsVerticalScrollIndicator={false}
            refreshing={false}
            onRefresh={()=>handleRefresh()}
            ItemSeparatorComponent={()=>seprator()}
            renderItem={({item,index})=>renderList(item,index)}>
            </FlatList>}
            <Loader show={variable}/>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    renderItemView:{width:'80%',paddingHorizontal:10},
    renderItemText:{...font.fontNrml_16},
    sepratorStyle:{height:1,width:'100%',backgroundColor:'grey'}

})
export default ListScreen