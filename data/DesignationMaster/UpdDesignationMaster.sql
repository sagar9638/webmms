
UPDATE [dbo].[DesignationMaster]
   SET [DName] = @p_DName
      ,[DShortName] = @p_DShortName
      ,[DAchiveCount] = @p_DAchiveCount
      ,[Remark] = @p_Remark
      ,[IsActive] = @p_IsActive
      ,[UpdUser] = @p_UpdUser
      ,[UpdDate] = GETDATE()
 WHERE [DId] = @p_DId 

 SELECT SCOPE_IDENTITY() AS DId








