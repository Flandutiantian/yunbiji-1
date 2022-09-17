<template>
    <div id="trash-detail">
       <div class="note-sidebar">
        <h3 class="notebook-title">回收站</h3>
        <div class="menu">
            <div>更新时间</div>
            <div>标题</div>
        </div>
        <ul class="notes">
            <li v-for="note in notes" :key="note.value">
                <router-link :to="`/trash?noteId=${note.id}`">
                    <span class="date">{{ note.updatedAtFriendly }}</span>
                    <span class="title">{{ note.title }}</span>
                </router-link>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
import Auth from '@/apis/auth'
export default {
    name: 'TrashDetail',
    data() {
        return {
            msg: '回收站'
        }
    },
    created() {
        Auth.getInfo()
            .then(res => {
                if (!res.isLogin) {
                    this.$router.push({ path: '/login' })
                }
            })
    }

}

</script>

<style scoped>
h1{
    color:blue;
}
</style>