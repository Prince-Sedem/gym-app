import { useState } from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';




export default function SignIn({navigation}) {
  const [isChecked, setIsChecked] = useState(false);
  
  return (
    <View className="flex-1 bg-black">
      <View className="flex-row ">
      <Image  source={require('../assets/images/muscle.png')} className="w-10 h-10 mt-2 ml-3" />
      <Text className="border-t mt-7 w-[330px] ml-4 border-slate-500"></Text>


      </View>
      <View className="ml-3 mt-10 ">
      <Text className="text-white font-bold text-xl">Sign In to your account</Text>
      <Text className="text-slate-500  text-sm mt-2">Welcome back! Please enter your details.</Text>
      </View>
      <Text className="ml-3 text-m text-white mt-3 mb-2">Email</Text>
      <View className=" ml-3 bg-slate-900 w-[370px] rounded-xl">
      <Image  source={require('../assets/images/email.png')} className="w-5 h-5 absolute mt-3 ml-2"  />
      <TextInput
      className="text-slate-500   border border-slate-400 rounded-xl w-[370px] h-10 pl-9"
      placeholder='please input email'
      placeholderTextColor="#64748b"

      />
      </View>
      <Text className="ml-3 text-m text-white mt-3 mb-2">Password</Text>
      <View className=" ml-3 bg-slate-900 w-[370px] rounded-xl">
      <Image  source={require('../assets/images/eye.png')} className="w-5 h-5 absolute mt-3 ml-[335px]"   />
      <Image  source={require('../assets/images/key.png')} className="w-5 h-5 absolute mt-3 ml-2 text-slate-500"  />
      <TextInput
      className="text-slate-500  border border-slate-400 rounded-xl w-[370px] h-10 pl-9"
      placeholder='please input password'
      placeholderTextColor="#64748b"
      />
      </View>
      <View className="flex-row ml-3 mt-3">
        <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
          <MaterialCommunityIcons
            name={isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={24}
            color="#64748b"
            className="pl-3"
          />
        </TouchableOpacity>
        <Text  className="text-slate-500">Remember me</Text>
        <Text className="ml-28 font-bold text-white">Forgot Password?</Text>
      </View>
      

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text className="text-center text-black bg-white font-bold border border-slate-500 ml-3 mt-5 pt-2 rounded-xl w-[370px] h-10 ">Sign In</Text>

      </TouchableOpacity>
      <View className="flex-row justify-center mt-3">
        <Text className="border-t mt-4 w-40 mr-3 border-slate-500"></Text>
        <Text className="mt-1 mr-2 text-slate-500">OR</Text>
        <Text className="border-t mt-4 w-40 mr-4 border-slate-500"></Text>
      </View>


   
      <TouchableOpacity>
          <Image  source={require('../assets/images/search.png')} className="w-5 h-5 absolute mt-8 ml-32  " />
          <Text className="text-center text-white font-bold border border-slate-500 ml-3 mt-5 pt-3 pl-12 rounded-xl w-[370px] h-10 ">Sign in with Google</Text>

      </TouchableOpacity>

      <TouchableOpacity>
          <Image  source={require('../assets/images/facebook (1).png')} className="w-5 h-5 absolute mt-8 ml-32 " />
          <Text className="text-center text-white font-bold  border border-slate-500 ml-3 mt-5 pt-3 pl-16 rounded-xl w-[370px] h-10 ">Sign in with Facebook</Text>

      </TouchableOpacity>

      <View className="flex-row justify-center mt-32 ">
        <Text className="text-slate-500 text-m">Don't have an account?</Text>
        <Text 
        onPress={() => navigation.navigate("SignUp")} className="font-bold ml-1 text-white text-m">Sign up</Text>
      </View>


    </View>
  );
}