import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: "topics",
    initialState: {topics: {}},
    reducers: {
      addTopic: (state, action) => {
        const newTopic = { 
            id: action.payload.id,
            name: action.payload.name,
            icon: action.payload.icon,
            quizIds: []
        }
        state.topics[action.payload.id] = newTopic;
      },
      addQuizId: (state, action) => {
        state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
        }
    }
});

//selectTopics selector
export const selectTopics = state => state.topics.topics;

export const addTopic = topicsSlice.actions.addTopic;
export const addQuizId = topicsSlice.actions.addQuizId;

export default topicsSlice.reducer;