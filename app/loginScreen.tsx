import { View, Text, Image, StyleSheet, TouchableOpacity, Linking} from "react-native";

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
    termsTextStyling: {
      fontSize: 16,
      paddingTop: 200,
      paddingHorizontal: 20,
      paddingBottom:10
    },
});
  
export default function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image
              source={require('../assets/images/icon-title.png')}>
            </Image>
            <Text style={styles.termsTextStyling}>By tapping Sign in or Create account, you agree to our  
              <TouchableOpacity onPress={() => Linking.openURL('#')}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  Terms of service. 
                </Text>
              </TouchableOpacity>
            </Text>
            
           <TouchableOpacity  onPress={() => navigation.navigate('CreateAccountScreen')} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Create account</Text>
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', fontSize: 16, paddingTop: 10}}>Sign in</Text>
      </View>
    );
  }

  