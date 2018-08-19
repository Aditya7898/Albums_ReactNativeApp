import React from 'react';
import { Text, View, Image, Linking} from 'react-native';
import Card from './card';
import CardSection from './cardSection'
import Button from './button';

const AlbumDetail = ({ albumData }) => {
    const { title, artist, thumbnail_image, image, url } = albumData;   // Destructuring props object
    const {
        thumbnail_Style,
        headerContentStyle,
        thumbnail_Container_Style,
        headerTextStyle,
        ImageStyle
    } = styles; // Destructuring styles object

    return (
        <Card>
            <CardSection>
                <View style={thumbnail_Container_Style}>
                    <Image
                        style={thumbnail_Style}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={ImageStyle}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
              <Button whenPress={() => Linking.openURL(url)}>
                  Buy Now 
              </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnail_Style: {
        height: 50,
        width: 50
    },
    ImageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnail_Container_Style: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};
export default AlbumDetail;