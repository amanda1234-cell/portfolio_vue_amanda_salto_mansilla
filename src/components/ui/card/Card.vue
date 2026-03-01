<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { Primitive } from "reka-ui";
import { cn } from "@/lib/utils";

interface Props extends PrimitiveProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  as: "article",
});
</script>

<template>
  <Primitive
    data-slot="card"
    :as="as"
    :as-child="asChild"
    :class="
      cn(
        'rounded-2xl border border-[#efe2e5] bg-[#fffafb] p-4 shadow-[0_8px_20px_rgba(111,21,38,0.08),0_2px_6px_rgba(111,21,38,0.08)]',
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>
