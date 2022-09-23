import request from '@/helpers/request'
import { friendlyDate } from '@/helpers/util'


const URL = {
    GET: '/notebooks/trash',
    REVERT: '/notes/:noteId/revert',
    DELETE: '/notes/:noteId/confirm'
}

export default {
    getAll() {
        return new Promise((resolve, reject) => {
            request(URL.GET)
                .then(res => {
                    res.data = res.data.sort((note, note2) => note1.createAt < note2.createAt ? 1 : -1)
                    res.data.forEach(note => {
                        notebook.createdAtFriendly = friendlyDate(note.createdAt)
                        notebook.updatedAtFriendly = friendlyDate(note.updatedAt)
                    })
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        })
    },

    deleteNote({ noteId }) {
        return request(URL.DELETE.replace(':noteId', noteId), 'DELETE')
    },

    revertNote({ noteId }) {
        return request(URL.REVERT.replace(':noteId', noteId), 'PATCH')
    },


}