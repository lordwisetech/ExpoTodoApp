// _layout.jsx
import React from 'react';
import { Tabs } from 'expo-router';
import { TasksProvider } from '../../components/TaskContext'; // Adjust path if needed

//icons 
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const tabsLayout = () => {
    return (
        <TasksProvider>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { backgroundColor: '#474973', borderTopWidth: 0 },
                    tabBarInactiveBackgroundColor: '#0D0C1D',
                }}
            >
                <Tabs.Screen
                    name="Tasks"
                    options={{
                        tabBarLabel: 'TASKS',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5 name="tasks" size={24} color={color} />
                        ),
                    }}
                />



                <Tabs.Screen
                    name="CreateTask"
                    options={{
                        tabBarLabel: 'CREATE',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="create-outline" size={24} color={color} />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="DeleteTask"
                    options={{
                        tabBarLabel: 'DELETE',
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="delete" size={24} color={color} />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="EditTask"
                    options={{
                        tabBarLabel: 'UPDATE',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="update" size={24} color={color} />
                        ),
                    }}
                />
            </Tabs>
        </TasksProvider>
    );
};

export default tabsLayout;
