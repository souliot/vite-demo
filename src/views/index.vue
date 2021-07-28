<template>
  <div>
    <el-button type="primary">默认按钮</el-button>
    <vxe-toolbar ref="xToolbar" custom> </vxe-toolbar>
    <vxe-table ref="xTable" :align="allAlign" :data="tableData1">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex"></vxe-table-column>
      <vxe-table-column field="age" title="Age"></vxe-table-column>
    </vxe-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue'
import { VxeTableInstance, VxeToolbarInstance } from 'vxe-table'
export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const allAlign = ref(null)
    const xTable = ref({} as VxeTableInstance)
    const xToolbar = ref({} as VxeToolbarInstance)
    const tableData1 = ref([
      {
        id: 10001,
        name: 'Test1',
        role: 'Develop',
        sex: 'Man',
        age: 28,
        address: 'vxe-table 从入门到放弃',
      },
      {
        id: 10002,
        name: 'Test2',
        role: 'Test',
        sex: 'Women',
        age: 22,
        address: 'Guangzhou',
      },
      {
        id: 10003,
        name: 'Test3',
        role: 'PM',
        sex: 'Man',
        age: 32,
        address: 'Shanghai',
      },
      {
        id: 10004,
        name: 'Test4',
        role: 'Designer',
        sex: 'Women',
        age: 24,
        address: 'Shanghai',
      },
    ])
    nextTick(() => {
      // 将表格和工具栏进行关联
      const $table = xTable.value
      const $toolbar = xToolbar.value
      $table.connect($toolbar)
    })
    return {
      allAlign,
      xTable,
      xToolbar,
      tableData1,
    }
  },
})
</script>
