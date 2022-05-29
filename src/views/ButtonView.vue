<template>
  <div class="root">
    <el-badge :value="12" class="item">
      <el-button>comments</el-button>
    </el-badge>
    <el-badge :value="3" class="item">
      <el-button>replies</el-button>
    </el-badge>
    <el-badge @click="showAlert" :value="1" class="item" type="primary">
      <el-button>comments</el-button>
    </el-badge>
    <el-badge :value="2" class="item" type="warning">
      <el-button>replies</el-button>
    </el-badge>

    <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      Click Me
      <el-icon class="el-icon--right"><caret-bottom/></el-icon>
    </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item class="clearfix">
            comments
            <el-badge class="mark" :value="12"/>
          </el-dropdown-item>
          <el-dropdown-item @click="handle" class="clearfix">
            replies
            <el-badge class="mark" :value="3"/>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>

</template>

<script>

import {ElNotification} from "element-plus";

export default {
  methods: {
    handle() {
      this.showAlert()
    },
    showAlert() {
      ElNotification({
        title: 'Success',
        message: 'This is a success message',
        type: 'success',
      })
    }
  }
}
</script>
