// CreateTask.jsx
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { TasksContext } from '../../components/TaskContext'

const CreateTask = () => {
    const { addTask } = useContext(TasksContext);
    const [taskTitle, setTaskTitle] = useState('');

    const handleCreateTask = () => {
        if (taskTitle.trim()) {
            addTask(taskTitle);
            setTaskTitle('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Create Task</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Task Title"
                placeholderTextColor="#aaa"
                value={taskTitle}
                onChangeText={setTaskTitle}
            />
            <TouchableOpacity style={styles.button} onPress={handleCreateTask}>
                <Text style={styles.buttonText}>Create Task</Text>
            </TouchableOpacity>
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
    input: {
        backgroundColor: '#28325E',
        color: '#fff',
        padding: 10,
        borderRadius: 8,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#1E88E5',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default CreateTask;
