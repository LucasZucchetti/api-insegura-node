export function toUserResponse(usuario) {
  return {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
    role: usuario.role,
    avatar_url: usuario.avatar_url,
  };
}

export function toUserListResponse(usuarios) {
  return usuarios.map(toUserResponse);
}
