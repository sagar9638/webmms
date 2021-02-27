
UPDATE [dbo].[MenuMaster]
   SET [MRefId] = @p_MRefId
      ,[MTitle] = @p_MTitle
      ,[MName] = @p_MName
      ,[MPath] = @p_MPath
      ,[MIcon] = @p_MIcon
      ,[Remark] = @p_Remark
      ,[IsActive] = @p_IsActive
      ,[UpdUser] = @p_UpdUser
      ,[UpdDate] = GETDATE()
 WHERE [MId] = @p_MId 

 SELECT SCOPE_IDENTITY() AS MId


