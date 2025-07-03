import React, { useState, useEffect, useRef } from 'react';
import BoxView from './components/BoxView.jsx';
import ShowSth from './components/ShowSth.jsx';
import LanguageToggle from './components/LanguageToggle.jsx';
import Timer from './components/Timer.jsx';
// import DolarHoy from './components/DolarHoy';
import { useTranslation } from 'react-i18next';

import './index.css';

const LOCAL_STORAGE_KEY = "some_value";

function MainToDo() {


    const [tasks, setTasks] = useState([]);
    const isFirstRender = useRef(true);
    const { t } = useTranslation();

    useEffect(() => {
        const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    // Save tasks to localStorage when tasks change, but skip first render
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    const handleAddBox = (title) => {

        const newId = String(Date.now());

        const newText = title;

        setTasks((prevTasks) => [{ id: newId, title: newText }, ...prevTasks]);


    }

    const removeTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
    }

    const editTask = (id, newTitle) => {

        setTasks((prevTasks) =>
            prevTasks.map(task =>
                task.id === id ? { ...task, title: newTitle } : task
            ))
    }




    return (

        <>
            {/* <DolarHoy /> */}
            <LanguageToggle />
            <Timer />
            <h1 className="titulo">{t('title')}</h1>
            <BoxView onAddBox={handleAddBox} />
            <ShowSth sth={tasks} onRemoveTask={removeTask} editTask={editTask} />
        </>




    )



}

export default MainToDo;