<template>
   <div className='flex main-dashboard-section'>
    <!-- Navbar -->
    <div className='bg-themes relative h-[100vh] w-1/5 sm:hidden'>
    <div class="flex justify-center h-[50px] items-center text-light">
        <p>Admin Dashboard</p>

    </div>
    <div class="navLink text-light">
     <ul>
        <li class="py-2">
           <p class="justify-center flex text-sm cursor-pointer"> <HomeIcon class="h-4 w-4 mx-2"/>Home</p>
        </li>
        <li class="py-2">
            <p class="justify-center flex text-sm cursor-pointer"> <ChartBarIcon class="h-4 w-4 mx-2"/>Charts</p>
        </li>
        <li class="py-2">
            <p class="justify-center flex text-sm cursor-pointer"> <StarIcon class="h-4 w-4 mx-2"/>App</p>
        </li>
        <li class="py-2">
            <p class="justify-center flex text-sm cursor-pointer"> <ChatBubbleBottomCenterIcon class="h-4 w-4 mx-2"/>Home</p>
        </li>
        <li class="py-2">
            <p class="justify-center flex text-sm cursor-pointer"> <ServerIcon class="h-4 w-4 mx-2"/>Store</p>
        </li>
        <li class="py-2">
            <p class="justify-center flex text-sm cursor-pointer"> <ShieldExclamationIcon class="h-4 w-4 mx-2"/>Shield</p>
        </li>
     </ul>
     <div class="w-full border-b-2  border-dashed  border-light h-[12px]">       
     </div>
    </div>
    <div class="mid-wrapper">

    </div>
    <div class="footer-slider p-3 absolute bottom-0 w-full text-center text-light">
     Settings
    </div>
    </div>
    <!-- mai sections -->
    <div className='w-full h-[100vh]   relative'>
    <nav class="bg-red[200] h-[50px] bg-base px-2 flex items-center justify-between">
    <div class="text-dark">
        LOGO _ SECTION
    </div>
    <div class="bg-dark h-[40px] w-[40px] rounded-full">
        
    </div>
    </nav>
    <div class="w-full p-3 ">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quisquam quia impedit asperiores voluptatibus, odio unde quidem aliquam maiores reprehenderit animi. Ex ut amet quam commodi, deserunt quibusdam tenetur ipsa aliquid velit odio corporis voluptatibus error, unde earum assumenda asperiores voluptates. Distinctio aspernatur, doloremque, a ex accusamus facere sunt dolorum voluptate saepe non ipsum iusto! Fugiat magni neque esse minus!</p>
   
    </div>
    </div>

   </div>


  <div class="fixed top-16 w-56 text-right">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Options
          <ChevronDownIcon
            class="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                <EditIcon
                  :active="active"
                  class="mr-2 h-5 w-5 text-violet-400"
                  aria-hidden="true"
                />
                Edit
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                <DuplicateIcon
                  :active="active"
                  class="mr-2 h-5 w-5 text-violet-400"
                  aria-hidden="true"
                />
                Duplicate
              </button>
            </MenuItem>
          </div>
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                <ArchiveIcon
                  :active="active"
                  class="mr-2 h-5 w-5 text-violet-400"
                  aria-hidden="true"
                />
                Archive
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                <MoveIcon
                  :active="active"
                  class="mr-2 h-5 w-5 text-violet-400"
                  aria-hidden="true"
                />
                Move
              </button>
            </MenuItem>
          </div>

          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                <DeleteIcon
                  :active="active"
                  class="mr-2 h-5 w-5 text-violet-400"
                  aria-hidden="true"
                />
                Delete
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>



   
  </template>
<script>

import { HomeIcon,ChartBarIcon,StarIcon,ChatBubbleBottomCenterIcon,ServerIcon, ShieldExclamationIcon} from '@heroicons/vue/24/solid'

export default {
  components: { HomeIcon,ChartBarIcon,StarIcon,ChatBubbleBottomCenterIcon,ServerIcon, ShieldExclamationIcon }
}

</script>
