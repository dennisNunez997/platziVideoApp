import React, {Component} from 'react';

import {
    View,
    FlatList,
} from 'react-native';

import Empty from '../components/empty';

import Separator from '../../sections/components/horizontal-separator';

import Suggestion from '../components/suggestion';

import Layout from '../components/category-list-layout';




class CategoryList extends Component {
    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text= "No hay sugerencia"/>
    itemSeparator = () => <Separator/>
    renderItem = ({item}) => {
        return (
            <Suggestion {...item}/>
        )
    }
    render(){   
        return(
            <Layout title="Categorias">
            <FlatList
                horizontal
                keyExtractor={this.keyExtractor}
                data={this.props.list}
                ListEmptyComponent={this.renderEmpty}
                ItemSeparatorComponent={this.itemSeparator}
                renderItem={ this.renderItem }
                    
            />
            </Layout>
        )
    }
}

export default CategoryList