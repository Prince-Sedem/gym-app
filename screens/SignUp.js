import { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, Modal} from 'react-native';





export default function SignUp({navigation}) {
  const [isModalVisble, setIsModalVisble] = useState(false);

  return (
    <View className="flex-1 bg-black" >
    <View className="flex-row ">
    <Image  source={require('../assets/images/muscle.png')} className="w-10 h-10 mt-2 ml-3" />
    <Text className="border-t mt-7 w-[330px] ml-4 border-slate-500"></Text>


    </View>
    <View className="ml-3 mt-10 ">
    <Text className="text-white font-bold text-xl">Sign Up to your account</Text>
    <Text className="text-slate-500  text-sm mt-2">Welcome user! Please enter your details.</Text>
    </View>
    <Text className="ml-3 text-m text-white mt-3 mb-2">Full Name</Text>
    <View className=" ml-3 bg-slate-900 w-[370px] rounded-xl">
    <Image  source={require('../assets/images/people.png')} className="w-5 h-5 absolute mt-3 ml-2"  />
    <TextInput
    className="text-slate-500   border border-slate-400 rounded-xl w-[370px] h-10 pl-9"
    placeholder='Enter your full name'
    placeholderTextColor="#64748b"

    />
    </View>
    <Text className="ml-3 text-m text-white mt-3 mb-2">Email</Text>
    <View className=" ml-3 bg-slate-900 w-[370px] rounded-xl">
    <Image  source={require('../assets/images/email.png')} className="w-5 h-5 absolute mt-3 ml-2"  />
    <TextInput
    className="text-slate-500   border border-slate-400 rounded-xl w-[370px] h-10 pl-9"
    placeholder='Enter your email'
    placeholderTextColor="#64748b"

    />
    </View>
    <Text className="ml-3 text-m text-white mt-3 mb-2">Phone Number</Text>
    <View className=" ml-3 bg-slate-900 w-[370px] rounded-xl">
    <Image  source={require('../assets/images/telephone.png')} className="w-5 h-5 absolute mt-3 ml-2"  />
    <TextInput
    className="text-slate-500   border border-slate-400 rounded-xl w-[370px] h-10 pl-9"
    placeholder='Enter your phone number'
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
    <TouchableOpacity onPress={() => setIsModalVisble(true)} >
          <Text className="text-center text-black bg-white font-bold border border-slate-500 ml-3 mt-5 pt-2 rounded-xl w-[370px] h-10 ">Sign Up</Text>

    </TouchableOpacity>
    <View className="flex-row justify-center mt-3">
      <Text className="border-t mt-4 w-40 mr-3 border-slate-500"></Text>
      <Text className="mt-1 mr-2 text-slate-500">OR</Text>
      <Text className="border-t mt-4 w-40 mr-4 border-slate-500"></Text>
    </View>


 
    <TouchableOpacity>
        <Image  source={require('../assets/images/search.png')} className="w-5 h-5 absolute mt-8 ml-32  " />
        <Text className="text-center text-white font-bold border border-slate-500 ml-3 mt-5 pt-3 pl-12 rounded-xl w-[370px] h-10 ">Sign Up with Google</Text>

    </TouchableOpacity>

    <TouchableOpacity>
        <Image  source={require('../assets/images/facebook (1).png')} className="w-5 h-5 absolute mt-8 ml-32 " />
        <Text className="text-center text-white font-bold  border border-slate-500 ml-3 mt-5 pt-3 pl-16 rounded-xl w-[370px] h-10 ">Sign Up with Facebook</Text>

    </TouchableOpacity>
    <Modal 
    visible={isModalVisble}
    animationType='slide'
    transparent={true}
    >
      <View className="w-80 h-80 self-center mt-48 " >
      <View className="flex-1 justify-center items-center mt-12 bg-black rounded-2xl ">  
      <Image  source={require('../assets/images/checked.png')} className="w-24 h-24 mt-6 " />
      <Text className="text-white text-2xl font-bold">Successful</Text>
      <Text className="text-slate-500 text-sm">Your account has been created,</Text>
      <Text className="text-slate-500 text-sm"> Check your email address for a link to</Text>
      <Text className="text-slate-500 text-sm"> activate your account.</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
         <Text className="text-center text-black bg-white font-bold border border-slate-500 ml-3 mt-5 pt-2 rounded-xl w-[250px] h-10 mb-10">Proceed</Text>
      </TouchableOpacity>
      </View>
      </View>
    </Modal>


  </View>
  );
}


 
