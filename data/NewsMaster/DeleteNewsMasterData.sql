
DELETE FROM [dbo].[NewsMaster]
      WHERE [Id] = @p_Id

SELECT SCOPE_IDENTITY() AS NId



