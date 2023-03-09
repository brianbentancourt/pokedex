import { StyleSheet, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Stats({ stats }) {
    const [maxStat, setMaxStat] = useState(100)

    useEffect(() => {
        const max = Math.max(...stats.map(s => s.base_stat))
        if (max > 100)
            setMaxStat(max)
    }, [stats])

    const barStyles = (number) => {
        const color = number > 49 ? '#00ac17' : '#ff853e'
        const width = (number * 100 / maxStat).toFixed(2)
        return {
            backgroundColor: color,
            width: `${width}%`
        }
    }

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Base Stats</Text>
            {
                stats.map((item, index) => (
                    <View key={index} style={styles.block}>
                        <View style={styles.blockTitle}>
                            <Text style={styles.statName}>{item.stat.name}</Text>
                        </View>
                        <View style={styles.blockInfo}>
                            <Text style={styles.number}>{item.base_stat}</Text>
                            <View style={styles.bgBar}>
                                <View style={[styles.bar, barStyles(item.base_stat)]} />
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 80
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5
    },
    block: {
        flexDirection: 'row',
        paddingVertical: 5
    },
    blockTitle: {
        width: '30%'
    },
    statName: {
        fontSize: 12,
        color: '#6b6b6b',
        textTransform: 'capitalize'
    },
    blockInfo: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    number: {
        width: '12%',
        fontSize: 12
    },
    bgBar: {
        backgroundColor: '#dedede',
        width: '88%',
        height: 5,
        borderRadius: 20,
        overflow: 'hidden'
    },
    bar: {
        // backgroundColor: 'red',
        // width: '100%',
        height: 5,
        borderRadius: 20
    }
})