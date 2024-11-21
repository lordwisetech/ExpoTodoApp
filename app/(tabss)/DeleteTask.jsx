// DeleteTask.jsx
import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TasksContext } from '../../components/TaskContext'

const DeleteTask = () => {
    const { tasks, deleteTask } = useContext(TasksContext);

    const renderTask = ({ item }) => (
        <TouchableOpacity onPress={() => deleteTask(item.id)}>
            <View style={styles.task}>
                <Text style={styles.taskText}>{item.title}</Text>
                <Text style={styles.deleteText}>Delete</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Delete Task</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    taskText: {
        color: '#fff',
        fontSize: 16,
    },
    deleteText: {
        color: '#E53935',
        fontSize: 16,
    },
});

export default DeleteTask;
