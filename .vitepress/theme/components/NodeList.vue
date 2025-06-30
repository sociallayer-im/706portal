<script setup>
import { ref, computed } from 'vue'

// 根据名称自动判断类型
const getNodeTypeFromName = (name) => {
  if (name.includes('生活实验室')) return '生活实验室'
  if (name.includes('客厅')) return '城市客厅'
  if (name.includes('青年空间')) return '青年空间'
  return '青年空间' // 默认类型
}

// 城市节点数据
const cityNodes = ref([
  { continent: '亚洲', country: '中国', province: '浙江', city: '杭州', name: '706杭州生活实验室', type: '生活实验室', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '浙江', city: '杭州', name: '客厅酒馆', type: '城市客厅', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '浙江', city: '良渚', name: '706良渚客厅', type: '城市客厅', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '浙江', city: '良渚', name: '706良渚生活实验室', type: '生活实验室', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '上海', city: '上海', name: 'dweller', type: '青年空间', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '上海', city: '上海', name: '706静安客厅', type: '城市客厅', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '上海', city: '上海', name: '706上海生活实验室1.0', type: '生活实验室', description: '', manager: '程子建', contact: 'qflwynlbp', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '上海', city: '上海', name: '706上海生活实验室2.0a', type: '生活实验室', description: '', manager: 'lee', contact: 'wuleexs', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '上海', city: '上海', name: '706上海生活实验室2.0b', type: '生活实验室', description: '', manager: 'echo', contact: 'rgwan25', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '上海', city: '上海', name: '706上海生活实验室2.0d', type: '生活实验室', description: '', manager: '石伊', contact: 'yoshiyishi', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '上海', city: '上海', name: '706上海生活实验室3.0', type: '生活实验室', description: '', manager: 'joe', contact: 'zhouzhou-2050', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '上海', city: '上海', name: '706上海生活实验室4.0', type: '生活实验室', description: '', manager: '木华', contact: 'sherry574574', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '广东', city: '广州', name: '失地客厅', type: '城市客厅', description: '', manager: 'cool', contact: 'k_xingliang', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '广东', city: '广州', name: '生活实验室', type: '生活实验室', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '广东', city: '深圳', name: '706深圳生活实验室', type: '生活实验室', description: '', manager: '阿e', contact: 'fuhaookk', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '四川', city: '成都', name: '706成都客厅', type: '城市客厅', description: '', manager: '叉子', contact: 'LLLzzzzzz007', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '湖北', city: '武汉', name: '706武汉客厅', type: '城市客厅', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '湖南', city: '长沙', name: '706长沙客厅', type: '城市客厅', description: '', manager: '四维', contact: 'siwei8996', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '重庆', city: '重庆', name: '有空客厅', type: '城市客厅', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '亚洲', country: '中国', province: '香港', city: '香港', name: '', type: '青年空间', description: '', manager: '发条鸟', contact: '', location: '', cover: '' },
  { continent: '欧洲', country: '', province: '柏林', city: '', name: '706柏林青年空间', type: '青年空间', description: '', manager: 'nengda', contact: 'nengdayu', location: '', cover: '' },
  { continent: '欧洲', country: '', province: '伦敦', city: '', name: '706伦敦', type: '青年空间', description: '', manager: 'raine', contact: 'raineee_li', location: '', cover: '' },
  { continent: '欧洲', country: '', province: '巴黎', city: '', name: '706巴黎', type: '青年空间', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '欧洲', country: '', province: '阿姆斯特丹', city: '', name: '706阿姆斯特丹', type: '青年空间', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '欧洲', country: '', province: '汉堡', city: '', name: '706汉堡', type: '青年空间', description: '', manager: 'connie', contact: 'z344492883', location: '', cover: '' },
  { continent: '欧洲', country: '', province: '科隆', city: '', name: '706科隆', type: '青年空间', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '东南亚', country: '', province: '东京', city: '', name: '706东京', type: '青年空间', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '东南亚', country: '', province: '清迈', city: '', name: '706清迈', type: '青年空间', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '东南亚', country: '', province: '新加坡', city: '', name: '706新加坡', type: '青年空间', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '北美洲', country: '', province: '多伦多', city: '', name: '706多伦多', type: '青年空间', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '北美洲', country: '', province: '温哥华', city: '', name: '706温哥华', type: '青年空间', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '北美洲', country: '', province: '芝加哥', city: '', name: '706芝加哥', type: '青年空间', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '北美洲', country: '', province: '旧金山', city: '', name: '706旧金山', type: '青年空间', description: '', manager: 'chengyao', contact: '', location: '', cover: '' },
  { continent: '北美洲', country: '', province: '纽约', city: '', name: '706纽约', type: '青年空间', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '北美洲', country: '', province: '匹茨堡', city: '', name: '706匹茨堡', type: '青年空间', description: '', manager: '李子昱', contact: '', location: '', cover: '' },
  { continent: '北美洲', country: '', province: '洛杉矶', city: '', name: '706洛杉矶', type: '青年空间', description: '', manager: 'lisha', contact: '', location: '', cover: '' },
  { continent: '北美洲', country: '', province: '亚特兰大', city: '', name: '706亚特兰大', type: '青年空间', description: '', manager: '', contact: '', location: '', cover: '' },
  { continent: '澳洲', country: '', province: '墨尔本', city: '', name: '706墨尔本', type: '青年空间', description: '', manager: '绵裤', contact: '', location: '', cover: '' },
  { continent: '澳洲', country: '', province: '悉尼', city: '', name: '706悉尼', type: '青年空间', description: '', manager: '', contact: '', location: '', cover: '' }
])

// 过滤掉没有名称的节点
const validNodes = computed(() => {
  return cityNodes.value.filter(node => node.name && node.name.trim() !== '')
})

// 统计信息
const stats = computed(() => {
  const totalNodes = validNodes.value.length
  const totalContinents = new Set(validNodes.value.map(node => node.continent)).size
  const totalCountries = new Set(validNodes.value.map(node => node.country).filter(Boolean)).size
  const totalCities = new Set(validNodes.value.map(node => node.city || node.province).filter(Boolean)).size
  
  // 统计各类型空间数量
  const typeStats = validNodes.value.reduce((acc, node) => {
    const type = node.type || '青年空间'
    acc[type] = (acc[type] || 0) + 1
    return acc
  }, {})
  
  return {
    totalNodes,
    totalContinents,
    totalCountries,
    totalCities,
    typeStats
  }
})

// 复制成功提示状态
const copySuccess = ref(false)
const copyTimer = ref(null)

// 复制联系方式到剪贴板
const copyContact = async (contact) => {
  if (!contact) return
  try {
    await navigator.clipboard.writeText(contact)
    // 显示复制成功提示
    copySuccess.value = true
    if (copyTimer.value) clearTimeout(copyTimer.value)
    copyTimer.value = setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}

// 格式化位置显示
const formatLocation = (node) => {
  const { country, province, city } = node
  const parts = []
  
  if (country) parts.push(country)
  if (province && province !== city) parts.push(province)
  if (city) parts.push(city)
  
  return parts.join(' · ') || province || ''
}

// 按大洲分组
const nodesByContinent = computed(() => {
  const grouped = {}
  validNodes.value.forEach(node => {
    if (!grouped[node.continent]) {
      grouped[node.continent] = []
    }
    grouped[node.continent].push(node)
  })
  return grouped
})


</script>

<template>
  <div class="node-list-container">
    <!-- 复制成功提示 -->
    <div v-if="copySuccess" class="fixed top-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300">
      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        复制成功！
      </div>
    </div>
    
    <!-- 统计信息 -->
    <div class="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm">
        <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">{{ stats.totalNodes }}</div>
        <div class="text-sm text-gray-600 dark:text-gray-400">总节点</div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm">
        <div class="text-2xl font-bold text-green-600 dark:text-green-400">{{ stats.totalContinents }}</div>
        <div class="text-sm text-gray-600 dark:text-gray-400">大洲</div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm">
        <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">{{ stats.totalCountries }}</div>
        <div class="text-sm text-gray-600 dark:text-gray-400">国家</div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm">
        <div class="text-2xl font-bold text-orange-600 dark:text-orange-400">{{ stats.totalCities }}</div>
        <div class="text-sm text-gray-600 dark:text-gray-400">城市</div>
      </div>
    </div>
    
    <!-- 空间类型统计 -->
    <div class="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="(count, type) in stats.typeStats" :key="type" class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm">
        <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{{ count }}</div>
        <div class="text-sm text-gray-600 dark:text-gray-400">{{ type }}</div>
      </div>
    </div>

    <!-- 按大洲分组显示 -->
    <div v-for="(nodes, continent) in nodesByContinent" :key="continent" class="mb-12">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
        {{ continent }}
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">({{ nodes.length }} 个节点)</span>
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="node in nodes" 
          :key="`${node.continent}-${node.name}`"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <!-- 卡片内容 -->
          <div class="p-5">
            <!-- 节点名称 -->
            <div class="mb-3">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                {{ node.name || `706${node.city || node.province}` }}
              </h3>
            </div>
            
            <!-- 位置信息 -->
            <div class="mb-3 flex items-center">
              <svg class="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-sm text-gray-600 dark:text-gray-400">
                {{ formatLocation(node) }}
              </span>
            </div>
            
            <!-- 空间类型 -->
            <div class="mb-4">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" 
                    :class="{
                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': node.type === '青年空间',
                      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': node.type === '城市客厅',
                      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200': node.type === '生活实验室'
                    }">
                {{ node.type || '青年空间' }}
              </span>
            </div>
          
            
            <!-- 其他信息 -->
            <div class="space-y-3 border-t border-gray-100 dark:border-gray-700 pt-4">
              <!-- 负责人信息 -->
              <div v-if="node.manager" class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ node.manager }}</span>
              </div>
              
              <!-- 联系方式 -->
              <div v-if="node.contact" class="flex items-center group">
                <svg class="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <button 
                  @click="copyContact(node.contact)"
                  class="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer group-hover:underline flex-1 text-left"
                  :title="'点击复制: ' + node.contact"
                >
                  {{ node.contact }}
                </button>
                <svg class="w-3 h-3 ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                </svg>
              </div>
              
              <!-- 详细位置信息 -->
              <div v-if="node.location" class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ node.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.node-list-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 768px) {
  .node-list-container {
    padding: 0 0.5rem;
  }
  
  .grid {
    gap: 1rem;
  }
}
</style>