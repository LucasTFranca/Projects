DELIMITER $$
CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON usuarios
FOR EACH ROW
BEGIN
DELETE FROM SpotifyClone.historico WHERE usuario_id = OLD.usuario_id;
DELETE FROM SpotifyClone.seguidores WHERE usuario_id = OLD.usuario_id;
END $$
DELIMITER ;

DELETE FROM SpotifyClone.usuarios WHERE usuario_id = 1;
