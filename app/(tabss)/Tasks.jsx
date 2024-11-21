// Tasks.jsx
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TasksContext } from '../../components/TaskContext'

const Tasks = () => {
    const { tasks } = useContext(TasksContext);

    const renderTask = ({ item }) => (
        <View style={styles.task}>
            <Text style={styles.taskText}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Tasks</Text>
            <FlatList
                data={tasks}
                renderItem={renderTask}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161B33',
        padding: 20,
    },
    header: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    task: {
        backgroundColor: '#28325E',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    taskText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Tasks;
