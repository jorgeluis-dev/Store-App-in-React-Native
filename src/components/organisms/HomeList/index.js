import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules/Card'
import { Text } from '../../atoms/CustomText'

const FAKE_DATA = [
    {
        id: 0,
        image_url: 'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Darth-Vader.jpg',
    },
    { id: 1,
        image_url: 'https://s2.glbimg.com/564iUm_qElitbPk70KZZJrP83zQ=/0x0:620x465/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2016/J/R/xAVoPdSaApvuYrSmcAoA/leia.jpg'
    },
    { id: 2,
      image_url: 'https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4AEQDOF6GVA3FHVR2J7MTIERUA.jpg'
    },
    { id: 3,
        image_url: 'https://static3.tcdn.com.br/img/img_prod/460977/pre_venda_boneco_mestre_yoda_star_wars_episodio_ii_ataque_dos_clones_mms495_escala_1_6_hot_toys_34395_5_20180622141807.jpg'
    },
    { id: 4,
        image_url: 'https://i0.wp.com/sociedadejedi.com.br/wp-content/uploads/2016/04/C3PO.jpg?resize=700%2C445'
    },
]

export const HomeList = ( ) => {
    return <FlatList 
        horizontal
        data={FAKE_DATA}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={item => item.id}
    />

}
