ServerEvents.tags('item', event => {
  event.add('create_ultimate_factory:corals', [
    'minecraft:tube_coral_block',
    'minecraft:tube_coral',
    'minecraft:tube_coral_fan',
    'minecraft:brain_coral_block',
    'minecraft:brain_coral',
    'minecraft:brain_coral_fan',
    'minecraft:bubble_coral_block',
    'minecraft:bubble_coral',
    'minecraft:bubble_coral_fan',
    'minecraft:fire_coral_block',
    'minecraft:fire_coral',
    'minecraft:fire_coral_fan',
    'minecraft:horn_coral_block',
    'minecraft:horn_coral',
    'minecraft:horn_coral_fan'
  ])
  event.add('create_ultimate_factory:dead_corals', [
    'minecraft:dead_tube_coral_block',
    'minecraft:dead_tube_coral',
    'minecraft:dead_tube_coral_fan',
    'minecraft:dead_brain_coral_block',
    'minecraft:dead_brain_coral',
    'minecraft:dead_brain_coral_fan',
    'minecraft:dead_bubble_coral_block',
    'minecraft:dead_bubble_coral',
    'minecraft:dead_bubble_coral_fan',
    'minecraft:dead_fire_coral_block',
    'minecraft:dead_fire_coral',
    'minecraft:dead_fire_coral_fan',
    'minecraft:dead_horn_coral_block',
    'minecraft:dead_horn_coral',
    'minecraft:dead_horn_coral_fan'
  ])
})

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', [
    'sophisticatedstorage:controller',
    'sophisticatedstorage:storage_link',
    'sophisticatedstorage:storage_io',
    'sophisticatedstorage:storage_input',
    'sophisticatedstorage:storage_output',
    'sophisticatedstorage:decoration_table',
    'toms_storage:inventory_connector',
    'toms_storage:storage_terminal',
    'toms_storage:trim',
    'toms_storage:open_crate',
    'toms_storage:inventory_cable',
    'toms_storage:inventory_cable_framed',
    'toms_storage:inventory_cable_connector',
    'toms_storage:inventory_cable_connector_framed',
    'toms_storage:inventory_proxy',
    'toms_storage:crafting_terminal',
    'toms_storage:basic_inventory_hopper',
    'toms_storage:level_emitter'
  ])
})
