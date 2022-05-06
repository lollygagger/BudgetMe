import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import {useEffect, useState} from "react";

export default function App() {

  const [monthBudget, setMonthBudget] = useState(0);

  const [monthRent, setMonthRent] = useState(0);
  const [monthBills, setMonthBills] = useState(0);
  const [monthTransport, setMonthTransport] = useState(0);
  const [monthGrocery, setMonthGrocery] = useState(0);

  const [curBudget, setCurBudget] = useState(0);
  const [showFullBudget, setShow] = useState(false);

  const totalColor = {

  }


  useEffect(() => {
      setCurBudget(monthBudget - monthRent - monthBills - monthTransport - monthGrocery);
      if(curBudget < 0){
          styles.totalMoney.color = 'red'
      }
  })

  return (
      <View style={styles.container}>
        <View style={styles.container}>
            <Text>Input your Monthly Budget:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setMonthBudget}
                onSubmitEditing={() => setShow(true)}
                value={monthBudget}
                placeholder="Monthly Budget"
                keyboardType="numeric"
            />

            {showFullBudget ?
                (<View>
                    <Text>Input your monthly rent:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setMonthRent}
                        value={monthRent}
                        placeholder="Monthly Rent"
                        keyboardType="numeric"/>

                    <Text>Input any other monthly bills:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setMonthBills}
                        value={monthBills}
                        placeholder="Monthly Bills"
                        keyboardType="numeric"/>

                    <Text>Input your average monthly transportation cost:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setMonthTransport}
                        value={monthTransport}
                        placeholder="Monthly Rent"
                        keyboardType="numeric"/>

                    <Text>Input your average monthly grocery cost:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setMonthGrocery}
                        value={monthGrocery}
                        placeholder="Monthly Rent"
                        keyboardType="numeric"/>


                </View>
            ) : null}
        </View>

              <Text style={[styles.totalMoney, (curBudget < 0) ? {color: 'red'} : {color: 'green'}]}>{curBudget}</Text>


      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
  },
  totalMoney: {
      position: 'absolute',
      bottom: 50,
      right:  10,
  },
});
