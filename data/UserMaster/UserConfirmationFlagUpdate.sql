UPDATE UserMaster SET
ConfirmFlag = @p_ConfirmFlag,
ConfirmUser = @p_ConfirmUser,
ConfirmDate = GETDATE()
WHERE Id = @p_Id 

SELECT SCOPE_IDENTITY() AS Id