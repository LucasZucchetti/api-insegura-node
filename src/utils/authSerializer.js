export default function toLoginResponse(usuario, token) {
  return {
    token,

    user: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      role: usuario.role,
      avatar_url: usuario.avatar_url,
    },
  };
}
