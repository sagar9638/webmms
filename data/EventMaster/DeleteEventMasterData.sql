DELETE FROM [dbo].[EventMaster]
      WHERE [Id] = @p_Id;

SELECT SCOPE_IDENTITY() AS Id

