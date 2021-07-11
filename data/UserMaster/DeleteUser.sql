DELETE FROM [dbo].[UserMaster]
      WHERE [Id] = @p_Id;

SELECT SCOPE_IDENTITY() AS Id
