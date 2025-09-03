"use server";

import { revalidatePath } from "next/cache";

const data = ["吃饭", "睡觉", "打豆豆"];
export async function addTodo(formData: FormData) {
  "use server";

  const todo = formData.get("todo") as string;
  data.push(todo);
  console.log(data);
  // 刷新页面 清除服务端缓存
  revalidatePath("/");
}

export async function getTodos() {
  return data;
}
