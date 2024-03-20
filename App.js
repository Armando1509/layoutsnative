import React from 'react';

import {StyleSheet, Text, Image, View, ScrollView} from 'react-native';

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.banner} source={require('./img/bg.jpg')} />
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en París</Text>
          <ScrollView horizontal>
            <Image
              style={styles.ciudad}
              source={require('./img/actividad1.jpg')}
            />
            <Image
              style={styles.ciudad}
              source={require('./img/actividad2.jpg')}
            />
            <Image
              style={styles.ciudad}
              source={require('./img/actividad3.jpg')}
            />
            <Image
              style={styles.ciudad}
              source={require('./img/actividad4.jpg')}
            />
            <Image
              style={styles.ciudad}
              source={require('./img/actividad5.jpg')}
            />
          </ScrollView>

          <Text style={styles.titulo}>Los mejores alojamientos en París</Text>
          <View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./img/mejores1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./img/mejores2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./img/mejores3.jpg')}
              />
            </View>
          </View>

          <Text style={styles.titulo}>Hospedajes en LA</Text>
          <View style={styles.listado}>
          <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./img/hospedaje1.jpg')}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./img/hospedaje2.jpg')}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./img/hospedaje3.jpg')}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('./img/hospedaje4.jpg')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
    color: 'blue',
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 270,
    height: 250,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listado:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listadoItem:{
    flexBasis: '49%'
  },
});

export default App;
