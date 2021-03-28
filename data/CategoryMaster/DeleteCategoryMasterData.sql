DELETE FROM [dbo].[CategoryMaster]
      WHERE [Id] = @p_Id;

SELECT SCOPE_IDENTITY() AS Id

