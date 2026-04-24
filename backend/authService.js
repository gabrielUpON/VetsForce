export async function loginRequest(usuario, senha) {
  const response = await fetch("http://192.168.1.10:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      usuario,
      senha,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.erro || "Erro no login");
  }

  return data;
}