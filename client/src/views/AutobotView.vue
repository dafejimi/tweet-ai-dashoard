<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import BackButton from '@/components/BackButton.vue';
import { reactive, onMounted } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const router = useRouter();

const autobotId = route.params.id;

const state = reactive({
  autobot: [],
  posts: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response1 = await axios.get(`http://localhost:8080/autobots/${autobotId}`)
    const response2 = await axios.get(`http://localhost:8080/posts/autobots/${autobotId}`)
    state.autobot = response1.data[0]
    state.posts = response2.data[0]

    console.log(state.autobot)
  } catch (error) {
    console.error('Error fetching job', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <BackButton />
  <section v-if="!state.isLoading" class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div
            class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          >
            <div class="text-green-700 mb-4">{{ `USER ID :${state.autobot[0].id}` }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ state.autobot[0].name }}</h1>
            <div
              class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
            >
              <p class="text-green-700">{{ state.autobot[0].email}}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">
              Autobot Posts
            </h3>

            <p class="mb-4">
              <span><b>Post Count : </b></span>
              <span>{{ state.posts.length }}</span>
            </p>

            <h3 class="text-green-800 text-lg font-bold mb-2">Sample Post</h3>

            <hr class="my-4" />

            <p class="mb-4">
              <span class="text-green-800"><b>Post Id: </b></span>
              <span>{{ state.posts[0].id }}</span>
            </p>

            <p class="mb-4">
              <span class="text-green-800"><b>Post Title: </b></span>
              <span>{{ state.posts[0].title }}</span>
            </p>

            <p class="mb-4">
              <span class="text-green-800"><b>Post Body: </b></span>
              <span>{{ state.posts[0].body }}</span>
            </p>

            <hr class="my-4" />
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">

            <hr class="my-4" />

            <h3 class="text-xl mb-6"><b>Autobot Enpoints</b></h3>

            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ "http://localhost:8080/autobots" }}
            </p>

            <p class="my-2 bg-green-100 p-2 font-bold mb-6">
              {{ `http://localhost:8080/autobots/:botId` }}
            </p>

            <h3 class="text-xl mb-6"><b>Post Endpoints</b></h3>

            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ "http://localhost:8080/posts" }}
            </p>

            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ "http://localhost:8080/posts/:postId" }}
            </p>

            <p class="my-2 bg-green-100 p-2 font-bold mb-6">
              {{ "http://localhost:8080/posts/autobots/:botId" }}
            </p>

            <h3 class="text-xl mb-6"><b>Comment Endpoints</b></h3>

            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ "http://localhost:8080/comments" }}
            </p>

            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ "http://localhost:8080/comments/:commentId" }}
            </p>

            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ "http://localhost:8080/comments/posts/:postId" }}
            </p>
          </div>

          <!-- Manage -->
          <!-- <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <RouterLink
              :to="`/jobs/edit/${state.job.id}`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Edit Job</RouterLink
            >
            <button
              @click="deleteJob"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Delete Job
            </button>
          </div> -->
        </aside>
      </div>
    </div>
  </section>

  <div v-else class="text-center text-gray-500 py-6">
    <PulseLoader />
  </div>
</template>
