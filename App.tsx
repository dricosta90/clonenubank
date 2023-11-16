import React from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import styles from "./stylesTranferencia";
import Logo from "./src/assets/logo.png";
import Mastercard from "./src/assets/mastercard.png";
import Setting from "./src/assets/setting.png";
import Wallet from "./src/assets/Wallet.png";

const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={Logo} />
        <Image source={Setting} />
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>

          <View style={styles.cardFooter}>
            <Text style={styles.cardFooterText}>Qual é o valor da transferência?</Text>
            <View />

            <TextInput style={styles.textImput}
              placeholder="digite aqui o valor."
              placeholderTextColor='gray'
              keyboardType="numeric"
            />
            
          </View>
        </View>
        <View style={styles.cardDetails}>
          <View style={styles.cardDetailsHeader}>
            <Text style={styles.cardDetailsHeaderText}>Saldo disponível</Text>
            <Image source={Wallet} />
          </View>
          <Text style={styles.cardDetailsTextValue}>R$ 177,00
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Do que precisa?</Text>
        <ScrollView
          style={styles.footerScrollCardContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          <View style={styles.footerCard}>

          </View>
          <View style={styles.footerCard}></View>
        </ScrollView>
      </View>
    </View>
  );
}
export default App;


