export default function toLoginResponse(usuario, token) {
  return {
    token,

    user: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    },
  };
}
