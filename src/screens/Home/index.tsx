import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootNavigationProps } from '../../routes';

// import { Container } from './styles';

import * as StandingsActions from '../../store/module/Standings/actions';
import { RootState } from '../../store/module/rootReducer';
import { IStandings } from '../../interfaces/IStandings';
import { ColorPallete } from '../../global/Colors';
import Header from '../../components/Header';
import { FontFamily } from '../../global/FontFamily';

const Home: React.FC = () => {
    const dispatch = useDispatch();

    const { data, loading } = useSelector(
        (state: RootState) => state.standings,
    );

    console.tron.log('data', data);

    const [standings, setStandings] = useState<any[]>([]);

    const {
        params: { idLeague, season },
    } = useRoute<RootNavigationProps>();

    const getStandings = () => {
        dispatch(StandingsActions.getStandingsRequest(idLeague, season));
    };

    const _renderGroupInfo = (item: IStandings) => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 5,
                    flex: 1,
                    paddingVertical: 10,
                }}
            >
                <TouchableOpacity
                    onPress={(): void => console.tron.log('item', item.team.id)}
                    style={{
                        width: '50%',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={{ uri: item.team.logo }}
                        style={{ width: 30, height: 30, marginRight: 10 }}
                        resizeMode="contain"
                    />

                    <View style={{ width: 0, flexGrow: 1 }}>
                        <Text
                            style={{
                                fontSize: 14,
                                fontFamily: FontFamily.BLACK,
                                color: ColorPallete.WHITE,
                            }}
                        >
                            {item.team.name}
                        </Text>
                    </View>
                </TouchableOpacity>

                <View
                    style={{
                        flexDirection: 'row',
                        width: '50%',
                    }}
                >
                    <View
                        style={{
                            width: '25%',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                fontFamily: FontFamily.REGULAR,
                                color: ColorPallete.WHITE,
                            }}
                        >
                            {item.points}
                        </Text>
                    </View>
                    <View
                        style={{
                            width: '25%',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                fontFamily: FontFamily.REGULAR,
                                color: ColorPallete.WHITE,
                            }}
                        >
                            {item.all.played}
                        </Text>
                    </View>

                    <View
                        style={{
                            width: '25%',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                fontFamily: FontFamily.REGULAR,
                                color: ColorPallete.WHITE,
                            }}
                        >
                            {item.all.win}
                        </Text>
                    </View>

                    <View
                        style={{
                            width: '25%',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                fontFamily: FontFamily.REGULAR,
                                color: ColorPallete.WHITE,
                            }}
                        >
                            {item.all.lose}
                        </Text>
                    </View>
                </View>
            </View>
        );
    };

    const _renderGroups = (item: any) => {
        return (
            <View
                style={{
                    marginBottom: 20,
                    backgroundColor: '#2d2d2d',
                    padding: 20,
                    borderRadius: 15,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        marginBottom: 10,
                        marginTop: 5,
                    }}
                >
                    <View style={{ width: '50%' }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontFamily: FontFamily.BOLD,
                                color: ColorPallete.WHITE,
                            }}
                        >
                            Time
                        </Text>
                    </View>

                    <View
                        style={{
                            width: '50%',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                width: '25%',
                                alignItems: 'flex-end',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontFamily: FontFamily.BOLD,
                                    color: ColorPallete.WHITE,
                                }}
                            >
                                P
                            </Text>
                        </View>

                        <View
                            style={{
                                width: '25%',
                                alignItems: 'flex-end',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontFamily: FontFamily.BOLD,
                                    color: ColorPallete.WHITE,
                                }}
                            >
                                J
                            </Text>
                        </View>

                        <View
                            style={{
                                width: '25%',
                                alignItems: 'flex-end',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontFamily: FontFamily.BOLD,
                                    color: ColorPallete.WHITE,
                                }}
                            >
                                V
                            </Text>
                        </View>

                        <View
                            style={{
                                width: '25%',
                                alignItems: 'flex-end',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontFamily: FontFamily.BOLD,
                                    color: ColorPallete.WHITE,
                                }}
                            >
                                D
                            </Text>
                        </View>
                    </View>
                </View>
                <FlatList
                    data={item}
                    renderItem={({ item }) => _renderGroupInfo(item)}
                    keyExtractor={(item, index) => String(index)}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    };

    useEffect(() => {
        getStandings();
    }, []);

    useEffect(() => {
        if (data && data.length > 0) {
            setStandings(data[0].league.standings);
        }
    }, [data]);

    return (
        <View style={{ flex: 1, backgroundColor: '#1f1f1f' }}>
            <Header title="Home" />

            {loading ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <ActivityIndicator
                        size="large"
                        color={ColorPallete.SECONDARY}
                    />
                </View>
            ) : (
                <View style={{ padding: 20 }}>
                    <FlatList
                        data={standings}
                        renderItem={({ item }) => _renderGroups(item)}
                        keyExtractor={(item, index) => String(index)}
                        contentContainerStyle={{ paddingBottom: 70 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            )}
        </View>
    );
};

export default Home;
