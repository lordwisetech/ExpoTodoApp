// EditTask.jsx
import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { TasksContext } from '../../components/TaskContext'

const EditTask = () => {
    const { tasks, editTask } = useContext(TasksContext);
    const [editingId, setEditingId] = useState(null);
    const [newTitle, setNewTitle] = useState('');

    const handleEdit = () => {
        if (newTitle.trim()) {
            editTask(editingId, newTitle);
            setEditingId(null);
            setNewTitle('');
        }
    };

    const renderTask = ({ item }) => (
        <TouchableOpacity onPress={() => setEditingId(item.id)}>
            <View style={styles.task}>
                <Text style={styles.taskText}>{item.title}</Text>
                {editingId === item.id && (
                    <TextInput
                        style={styles.input}
                        placeholder="Edit Task Title"
                        value={newTitle}
                        onChangeText={setNewTitle}
                    />
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Edit Task</Text>
            <FlatList
                data={tasks}
                renderItem={renderTask}
                keyExtractor={(item) => item.id}
            />
            {editingId && (
                <TouchableOpacity style={styles.button} onPress={handleEdit}>
                    <Text style={styles.buttonText}>Save Changes</Text>
                </TouchableOpacity>
            )}
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
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#1E88E5',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default EditTask;
