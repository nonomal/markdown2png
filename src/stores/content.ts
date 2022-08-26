import { defineStore } from 'pinia'
import { DEFAULT_TEXT, STORAGE_CONTENT, STORAGE_DATE } from './../helper/constant'

export const useContentStore = defineStore({
  id: 'content',

  state: () => {
    return {
      isWithDate: JSON.parse(localStorage.getItem(STORAGE_DATE)) || false,
      content: localStorage.getItem(STORAGE_CONTENT) || DEFAULT_TEXT,
    }
  },

  getters: {},

  actions: {
    updateContent(content: string) {
      this.content = content
      localStorage.setItem(STORAGE_CONTENT, content)
    },

    updateWithDate(isWith: boolean) {
      this.isWithDate = isWith
      localStorage.setItem(STORAGE_DATE, isWith)
    }
  },
})
