
import UserDetails from "@/app-example/userDetails";
import * as Constants from './constants'
import PhoneInput from "react-native-phone-number-input";

import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, TextInput} from "react-native";
type UserDetails = {
  firstName: String,
  lastName: String,
  phoneNumber: Number,
  email: String,
  dateOfBirth: String
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 70,
      alignItems: 'center'
    },
   
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#DDD2D2",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 100
    },
    appButtonText: {
      fontSize: 16,
      color: "#000000",
      fontWeight: "bold",
      alignSelf: "center"
    }, 
    inputTextStyle: {
      fontSize: 40,
    }
  });
export function DOBInputScreen({navigation}){
  return(
    <View style={styles.container}> 
      <Text style={styles.inputTextStyle}>
        What is your date of birth?
      </Text>
        <TextInput
          editable
          maxLength={255}
          value= '06/04/1997'
          style={{padding: 10}}
        />
        <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Continue</Text>
        </TouchableOpacity>
    </View>
  );
}
export function VerifyEmailScreen({navigation}){
  return(
  <View style={styles.container}> 
    <Text style={styles.inputTextStyle}>
      Please enter the verification code emailed to you
    </Text>
    <TextInput
        editable
        multiline
        numberOfLines={1}
        maxLength={6}
        value= '10'
        style={{padding: 10}}
      />
      <TouchableOpacity onPress={() => navigation.navigate('DOBInputScreen')}  style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity>
          <Text style={styles.appButtonText}>Didn't get a code?</Text>
      </TouchableOpacity>
  </View>
  );
};
export function EmailInputScreen({navigation}){
  var email
  return(
    <View style={styles.container}> 
      <Text style={styles.inputTextStyle}>
        Provide a valid email
      </Text>
        <TextInput
          editable
          maxLength={255}
          value= {email}
          placeholder="example@example.comm"
          style={{padding: 10}}
        />
        <TouchableOpacity onPress={() => navigation.navigate('VerifyEmailScreen')}  style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{Constants.CONTINUE}</Text>
        </TouchableOpacity>
    </View>
  );
}
export function PersonalDetailsScreen({navigation}){
  var firstName;
  var lastName;
  return(
    <View style={styles.container}> 
      <Text style={styles.inputTextStyle}>
        {Constants.NAMEQUESTION}
      </Text>
      <TextInput
        editable
        maxLength={255}
        value= {firstName}
        placeholder= {Constants.FIRSTNAME}
        style={{padding: 10}}
      />
      <TextInput
        editable
        maxLength={255}
        value= {lastName}
        placeholder={Constants.LASTNAME}
        style={{padding: 10}}
      />
      
      <TouchableOpacity onPress={() => navigation.navigate('EmailInputScreen')}  style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{Constants.CONTINUE}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
          <Text style={styles.appButtonText}>Only visible to matches</Text>
      </TouchableOpacity>
    </View>
  );
}
export function VerifyPhoneScreen({navigation}){
  return(
  <View style={styles.container}> 
    <Text style={styles.inputTextStyle}>
      {Constants.PHONEVERIFICATIONCODE}
    </Text>
    <TextInput
        editable
        multiline
        numberOfLines={1}
        maxLength={6}
        value= '123456'
        style={{padding: 10}}
      />
      <TouchableOpacity onPress={() => navigation.navigate('PersonalDetailsScreen')}  style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{Constants.CONTINUE}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
          <Text style={styles.appButtonText}>{Constants.NOVERIFYCODE}</Text>
      </TouchableOpacity>
  </View>
  );
};
export default function CreateAccountScreen({navigation}) {
    return(
        <View style={styles.container}> 
            <Text style={styles.inputTextStyle}>
                {Constants.PHONEQUESTION}
            </Text>
            <TextInput
              editable
              maxLength={255}
              value= {UserDetails.phoneNumber}
              style={{padding: 10}}
            />
            <Text>
              {Constants.VERIFICATIONCODEMSG}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('VerifyPhoneScreen')} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>{Constants.CONTINUE}</Text>
            </TouchableOpacity>
        </View>
    )
}