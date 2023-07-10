import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import starIcon from "../assets/star.png";
import startIconFilled from  "../assets/starFilled.png";
import styles from "./styles";
import {    useState } from "react";

export default function Stars({
   stars: oldStars,
   editable = false,
   big = false,
 }: {
   stars: number;
   editable?: boolean;
   big?: boolean;
 }) {
    // const starsStyle = styles(big)
    const [starsStyle, setStarsStyle] = useState(styles(big))
    const [amount, setAmount] = useState(oldStars)

    const getImage = (index : number) => {
         if (index < amount){
            return startIconFilled;
         }
         return starIcon;
    } 

    const RenderStars = () => {
      const starList = [];
      for (let i = 0; i < 5; i++){
         starList.push(
            <TouchableOpacity key={i} onPress={() => setAmount(i + 1)} disabled={!editable}>
               <Image source={getImage(i)} style={styles(big).starIcon}/>
            </TouchableOpacity>
         )
      }
      return starList
    }

    return  <View style={starsStyle.starsContainer}>
         <RenderStars/>
    </View>
    
}