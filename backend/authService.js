export async function loginRequest(usuario, senha) {
  const response = await fetch("/api/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usuario, senha }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.erro || "Erro no login");
  }

  return data;
}