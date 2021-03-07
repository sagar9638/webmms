DECLARE @DId NVARCHAR(50),@PERENTID NVARCHAR(50),@ConnectUserCount INT, @ADId NVARCHAR(50)

UPDATE UserMaster SET
ConfirmFlag = @p_ConfirmFlag,
ConfirmUser = @p_ConfirmUser,
ConfirmDate = GETDATE()
WHERE Id = @p_Id 

SELECT SCOPE_IDENTITY() AS Id

UPDATE UserMaster SET
ConnectUserCount =  ConnectUserCount + 1
WHERE RefId = @RefId;


SELECT @PERENTID = LEFT(RefId, LEN(RefId) - CHARINDEX('.', REVERSE(RefId)))
  FROM UserMaster
 WHERE RefId LIKE  @RefId + '.%'

SELECT @ConnectUserCount =  COUNT(*) FROM (
SELECT LEFT(RefId, LEN(RefId) - CHARINDEX('.', REVERSE(RefId))) perentId 
  FROM UserMaster
 WHERE RefId LIKE  @RefId + '.%'
 AND ConfirmFlag = 'Y'
 ) AS a where a.perentId = @RefId

SET @ADId = ( SELECT  DId
  FROM DesignationMaster
 WHERE DAchiveCount = (SELECT COUNT(*) FROM (
SELECT LEFT(RefId, LEN(RefId) - CHARINDEX('.', REVERSE(RefId))) perentId 
  FROM UserMaster
 WHERE RefId LIKE  @RefId + '.%'
 AND ConfirmFlag = 'Y'
 ) AS a where a.perentId = @RefId
 )
)


IF @ADId IS NOT NULL  
BEGIN
UPDATE UserMaster SET
DId = @ADId
WHERE RefId = @RefId;
END

