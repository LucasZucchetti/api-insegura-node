export function toUserResponse(usuario) {
  return {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
  };
}

export function toUserListResponse(usuarios) {
  return usuarios.map(toUserResponse);
}
